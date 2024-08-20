import { Role } from 'src/roles/entity/role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  roleId: string;

  @ManyToOne(() => Role, (role) => role.user)
  @JoinColumn({ name: 'roleId' })
  role: Role;
}
