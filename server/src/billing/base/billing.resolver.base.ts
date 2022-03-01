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
import { DeleteBillingArgs } from "./DeleteBillingArgs";
import { BillingFindManyArgs } from "./BillingFindManyArgs";
import { BillingFindUniqueArgs } from "./BillingFindUniqueArgs";
import { Billing } from "./Billing";
import { BillingService } from "../billing.service";

@graphql.Resolver(() => Billing)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BillingResolverBase {
  constructor(
    protected readonly service: BillingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  async _billingsMeta(
    @graphql.Args() args: BillingFindManyArgs
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

  @graphql.Query(() => [Billing])
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  async billings(
    @graphql.Args() args: BillingFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Billing[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Billing",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Billing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "own",
  })
  async billing(
    @graphql.Args() args: BillingFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Billing | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Billing",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Billing)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "delete",
    possession: "any",
  })
  async deleteBilling(
    @graphql.Args() args: DeleteBillingArgs
  ): Promise<Billing | null> {
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
