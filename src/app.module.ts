import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PredictionTextModule } from './prediction_text/prediction_text.module';
import { UserModule } from './user/user.module';
import { ReportModule } from './report/report.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PredictionTextModule, UserModule, ReportModule, BankAccountModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
