import { Injectable } from '@angular/core';
import { FeildsTypeDefinitions } from '../utils/consts/fields-type-defentions';
import { FieldsTypeDefinition } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class FieldsTypesDefinitions {
  private definitions = new Map<string, FieldsTypeDefinition>(
    Object.entries(FeildsTypeDefinitions)
  );

  getAllTypes() {
    return Array.from(this.definitions.values());
  }

  getTypeComponent(type: string): FieldsTypeDefinition | null {
    return this.definitions.get(type) || null;
  }
  
}
