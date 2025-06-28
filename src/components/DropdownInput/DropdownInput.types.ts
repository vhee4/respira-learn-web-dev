export interface Option {
  value: string;
  label: string;
  id?: string; // Assuming id is optional
}

export interface IDropdownInput {
  placeholder?: string;
  label?: string;
  value: string | string[]; // Since `value` could be a single string or an array of strings for multi-select
  onChange: (e: { target: { value: string | string[]; name?: string; id?: string } }) => void; // Type based on how onChange is used
  name?: string;
  error?: string | null; // Error would typically be a string or null
  options?: Option[]; // Options are objects with label and value properties
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  noOrder?: boolean;
  countryCode?: string;
  isMulti?: boolean; // Based on its usage as a boolean
}
