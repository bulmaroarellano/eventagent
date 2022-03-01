/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteEmployeArgs } from "./DeleteEmployeArgs";
import { EmployeFindManyArgs } from "./EmployeFindManyArgs";
import { EmployeFindUniqueArgs } from "./EmployeFindUniqueArgs";
import { Employe } from "./Employe";
import { EmployeService } from "../employe.service";

@graphql.Resolver(() => Employe)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmployeResolverBase {
  constructor(
    protected readonly service: EmployeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Employe",
    action: "read",
    possession: "any",
  })
  async _employesMeta(
    @graphql.Args() args: EmployeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Employe])
  @nestAccessControl.UseRoles({
    resource: "Employe",
    action: "read",
    possession: "any",
  })
  async employes(
    @graphql.Args() args: EmployeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Employe[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Employe",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Employe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Employe",
    action: "read",
    possession: "own",
  })
  async employe(
    @graphql.Args() args: EmployeFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Employe | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Employe",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Employe)
  @nestAccessControl.UseRoles({
    resource: "Employe",
    action: "delete",
    possession: "any",
  })
  async deleteEmploye(
    @graphql.Args() args: DeleteEmployeArgs
  ): Promise<Employe | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
