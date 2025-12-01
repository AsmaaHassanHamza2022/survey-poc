import { LongTextField } from "../../Components/fields-components/long-text-field/long-text-field";
import { SelectField } from "../../Components/fields-components/select-field/select-field";
import { ShortTextField } from "../../Components/fields-components/short-text-field/short-text-field";
import { QuestionTypes } from "../helpers/enums";


export const FeildsTypeDefinitions = {
  shortText: {
    type: QuestionTypes.ShortText,
    label: 'Text Field',
    answerLabel: 'Short Text Answer',
    component: ShortTextField,
  },
  longText: {
    type: QuestionTypes.LongText,
    label: 'long Text Field',
    answerLabel: 'Long Text Answer',
    component: LongTextField,
  },
   oneSelect: {
    type:QuestionTypes.OneSelect,
    label: 'One Select Field',
    answerLabel: 'choose one answer',
    component: SelectField,
  },
}
