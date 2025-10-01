
import winston from 'winston';
import path from 'path';

const { combine, timestamp, printf, colorize, errors } = winston.format;

// Custom format with enhanced information
const enhancedFormat = printf(({ 
  level, 
  message, 
  timestamp, 
  stack, 
  service = 'design-patterns-app',
  operation,
  userId,
  correlationId 
}) => {
  let logMessage = `${timestamp} [${level.toUpperCase()}] [${service}]`;
  
  if (operation) logMessage += ` [${operation}]`;
  if (correlationId) logMessage += ` [${correlationId}]`;
  if (userId) logMessage += ` [User:${userId}]`;
  
  logMessage += ` ${message}`;
  
  if (stack) logMessage += `\nStack: ${stack}`;
  
  return logMessage;
});

// Gold standard logger with multiple transports and levels
export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    errors({ stack: true }),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    enhancedFormat
  ),
  defaultMeta: { service: 'design-patterns-app' },
  transports: [
    // Console transport with colors
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        enhancedFormat
      )
    }),
    // File transport for errors
    new winston.transports.File({ 
      filename: path.join(process.cwd(), 'logs', 'error.log'), 
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    // File transport for all logs
    new winston.transports.File({ 
      filename: path.join(process.cwd(), 'logs', 'combined.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 10
    })
  ],
  // Handle exceptions and rejections
  exceptionHandlers: [
    new winston.transports.File({ filename: path.join(process.cwd(), 'logs', 'exceptions.log') })
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: path.join(process.cwd(), 'logs', 'rejections.log') })
  ]
});

// Enhanced logging methods with correlation tracking
export class EnhancedLogger {
  private correlationId: string;
  private operation: string;
  private userId?: string;

  constructor(operation: string, correlationId?: string, userId?: string) {
    this.operation = operation;
    this.correlationId = correlationId || this.generateCorrelationId();
    this.userId = userId;
  }

  private generateCorrelationId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private logWithContext(level: string, message: string, meta?: any) {
    logger.log(level, message, {
      operation: this.operation,
      correlationId: this.correlationId,
      userId: this.userId,
      ...meta
    });
  }

  debug(message: string, meta?: any) {
    this.logWithContext('debug', message, meta);
  }

  info(message: string, meta?: any) {
    this.logWithContext('info', message, meta);
  }

  warn(message: string, meta?: any) {
    this.logWithContext('warn', message, meta);
  }

  error(message: string, error?: Error, meta?: any) {
    this.logWithContext('error', message, { 
      stack: error?.stack, 
      errorMessage: error?.message,
      ...meta 
    });
  }

  performance(message: string, startTime: number, meta?: any) {
    const duration = Date.now() - startTime;
    this.logWithContext('info', `${message} - Duration: ${duration}ms`, { duration, ...meta });
  }
}

// Ensure logs directory exists
import fs from 'fs';
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}
