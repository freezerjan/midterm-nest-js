import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ){}
  async create(createCategoryDto: CreateCategoryDto, id:number) {
    const isExist = await this.categoryRepository.findBy({
      user:{id},
      title:createCategoryDto.title
    })

    if(isExist.length) 
      throw new BadRequestException('This category already exist')

    const newCategory ={
      title: CreateCategoryDto.title,
      user:{id, },

    }

    return await this.categoryRepository.save(newCategory)
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
