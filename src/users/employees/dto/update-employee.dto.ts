import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { status_enum, StatusEmployeeListDto } from '../enums/status.enum';

export class UpdateEmployeeDto {
  @IsInt()
  id_employee: number;

  @IsOptional()
  @IsInt()
  id_position?: number;

  @IsOptional()
  @IsInt()
  id_manager?: number | null;

  @IsOptional()
  @IsEnum(StatusEmployeeListDto, {
    message:
      `El estado debe ser uno de los siguientes` +
      StatusEmployeeListDto.join(', '),
  })
  status: status_enum;
}
