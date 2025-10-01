
export class User {
  constructor(private id: number, private name: string, private email?: string) {
    if (!name) throw new Error('name required');
  }
  static Builder = class {
    private id = 0; private name = ''; private email?: string;
    withId(id: number) { this.id = id; return this; }
    withName(name: string) { this.name = name; return this; }
    withEmail(email: string) { this.email = email; return this; }
    build() { if (!this.name) throw new Error('name required'); return new User(this.id, this.name, this.email); }
  }
  toString() { return `User[id=${this.id},name=${this.name},email=${this.email}]`; }
}
