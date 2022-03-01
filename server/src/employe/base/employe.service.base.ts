/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Employe } from "@prisma/client";

export class EmployeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmployeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeFindManyArgs>
  ): Promise<number> {
    return this.prisma.employe.count(args);
  }

  async findMany<T extends Prisma.EmployeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeFindManyArgs>
  ): Promise<Employe[]> {
    return this.prisma.employe.findMany(args);
  }
  async findOne<T extends Prisma.EmployeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeFindUniqueArgs>
  ): Promise<Employe | null> {
    return this.prisma.employe.findUnique(args);
  }
  async create<T extends Prisma.EmployeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeCreateArgs>
  ): Promise<Employe> {
    return this.prisma.employe.create<T>(args);
  }
  async update<T extends Prisma.EmployeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeUpdateArgs>
  ): Promise<Employe> {
    return this.prisma.employe.update<T>(args);
  }
  async delete<T extends Prisma.EmployeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeDeleteArgs>
  ): Promise<Employe> {
    return this.prisma.employe.delete(args);
  }
}
