import { Module } from '@nestjs/common';
import { Authmodule } from './Auth/auth.module';
import { UserModule } from './user/user.module';
import { BookstoreModule } from './bookstore/bookstore.module';



@Module({
  imports: [Authmodule, UserModule, BookstoreModule],
})
export class AppModule {}
