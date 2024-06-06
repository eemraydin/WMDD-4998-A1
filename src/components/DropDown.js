import { Icon, SelectBackdrop, SelectIcon, SelectInput, SelectItem, SelectPortal } from "@gluestack-ui/themed";
import { ChevronDownIcon } from "@gluestack-ui/themed";
import { SelectContent } from "@gluestack-ui/themed";
import { FormControl, Select, SelectTrigger } from "@gluestack-ui/themed";

const DropDown = ({ selectedValue, onValueChange, options }) => {

  const handleSelect = (value) => {
    onValueChange(value);
  };

  return (
    <FormControl style={{ width: "100%" }}>
      <Select>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select option" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            {options.map((options) => (
              <SelectItem
                key={options.value}
                label={options.label}
                value={options.value}
                onPressOut={() => handleSelect(options.value)}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </FormControl>
  );
};


export default DropDown;