import { Controller, Get, Post, Body } from '@nestjs/common';
import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() transactionData: Transaction) {
    return this.transactionsService.create(transactionData);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }
}
