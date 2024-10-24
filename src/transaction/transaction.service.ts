import { BadRequestException, Inject, Injectable } from '@nestjs/common'; 
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction} from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    
  ) {}
  async create(createTransactionDto: CreateTransactionDto, id:number) {
    const newTransaction={
      title:createTransactionDto.title,
      amount: createTransactionDto.amount,
      type: createTransactionDto.type,
      category:{id:+createTransactionDto.category},
      user:{id: id},
      
    }
    if(!newTransaction) throw new BadRequestException('Something went wrong...')
    return await this.transactionRepository.save(newTransaction);
  }

  async findAll(id:number) {
    const transactions = await this.transactionRepository.find({
      where:{
        user:{id},
      },
      order:{
        createdAt:'DESC'
      }
    })
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
