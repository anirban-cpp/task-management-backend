import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  //@OneToMany decorator is used to say that for one user there can be many tasks
  //This decorator takes in 3 arguments.
  //The 1st argument is the type. 2nd argument is how to access this property
  //The 3rd argument is eager onject. If eager is true then when we fetch the user, it will automatically fetch the tasks for us as well.
  tasks: Task[];
}
