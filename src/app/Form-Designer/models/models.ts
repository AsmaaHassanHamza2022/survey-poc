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
    options?: OptionItem[];
    selectedOption?: 'string';
    showIf:{
        questionId:string;
        value:string;
    }
    isCollapsed?:boolean
}

export interface OptionItem{
    label:string;
    value:string;
    canDelete:boolean;
}

export interface Page{
    id: string;
    title:string;
    questions:Question[];
}
