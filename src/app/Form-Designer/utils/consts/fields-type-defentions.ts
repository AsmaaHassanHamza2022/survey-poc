import { LongTextField } from "../../Components/fields-components/long-text-field/long-text-field";
import { SelectField } from "../../Components/fields-components/select-field/select-field";
import { ShortTextField } from "../../Components/fields-components/short-text-field/short-text-field";

export const FeildsTypeDefinitions = {
  shortText: {
    type: 'shortText',
    label: 'Text Field',
    answerLabel: 'Short Text Answer',
    component: ShortTextField,
  },
  longText: {
    type: 'longText',
    label: 'long Text Field',
    answerLabel: 'Long Text Answer',
    component: LongTextField,
  },
   oneSelect: {
    type: 'oneSelect',
    label: 'One Select Field',
    answerLabel: 'choose one answer',
    component: SelectField,
  },
}
