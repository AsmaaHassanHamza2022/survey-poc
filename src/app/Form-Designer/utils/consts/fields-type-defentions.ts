import { LongTextField } from "../../Components/fields-components/long-text-field/long-text-field";
import { ShortTextField } from "../../Components/fields-components/short-text-field/short-text-field";

export const FeildsTypeDefinitions = {
  shortText: {
    type: 'shortText',
    label: 'Text Field',
    component: ShortTextField,
  },
  longText: {
    type: 'longText',
    label: 'long Text Field',
    component: LongTextField,
  },
}
