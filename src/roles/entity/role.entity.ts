import { User } from 'src/auth/entity/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @OneToMany(() => User, (user) => user.role)
  user: User;
}
