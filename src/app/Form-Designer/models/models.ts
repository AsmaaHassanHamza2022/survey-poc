import { Type } from "@angular/core";

export interface FieldsTypeDefinition {
    type: string;
    label: string;
    answerLabel: string;
    component:Type<any>;
}

export interface FormField {
    id: string;
    type: string;
    label?: string;
    placeholder?: string;    
}

export interface Question extends FormField {
    questionText: string;
    descriptionText: string;
    isRequired: boolean;
    options?: string[];
}

export interface Page{
    id: string;
    title:string;
    questions:Question[];
}
