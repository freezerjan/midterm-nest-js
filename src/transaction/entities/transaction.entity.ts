// import { Category } from "src/category/entities/category.entity";
// import { User } from "src/user/entities/user.entity";
// import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// @Entity()
// export class Transaction {
//     @PrimaryGeneratedColumn({name: 'transaction_id'})
//     id: number

//     @Column()
//     title:string
    
//     @Column({nullable: true})
//     type:string

//     @ManyToOne(()=> User, (user) => user.transactions)
//     @JoinColumn({name: 'user_id'})
//     user: User

//     @ManyToOne(()=> Category, (category)=> category.transactions)
//     @JoinColumn({name: 'category_id'})
//     category: Category

//     @Column()
//     amount: number

//     @CreateDateColumn()
//     creatAt: Date;

//     @UpdateDateColumn()
//     updateAt:Date

// }
import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ name: 'transaction_id' })
  id: number;

  @Column()
  title: string;
  
  @Column({ nullable: true })
  type: string;

  @ManyToOne(() => User, (user) => user.transactions, { nullable: false }) // Пользователь обязателен для транзакции
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, (category) => category.transactions, { nullable: false }) // Категория обязательна для транзакции
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
