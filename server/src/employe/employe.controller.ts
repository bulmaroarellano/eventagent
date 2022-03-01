import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeService } from "./employe.service";
import { EmployeControllerBase } from "./base/employe.controller.base";

@swagger.ApiTags("employes")
@common.Controller("employes")
export class EmployeController extends EmployeControllerBase {
  constructor(
    protected readonly service: EmployeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
