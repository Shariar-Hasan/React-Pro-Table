export const filterDataBasedOnType = {
  string: [
    [
      {
        title: "Contains ",
        value: "CONTAINS",
      },
      {
        title: "Not Contains",
        value: "NOT_CONTAINS",
      },
    ],
    [
      {
        title: "Starts with",
        value: "STARTS_WITH",
      },
      {
        title: "Ends with",
        value: "ENDS_WITH",
      },
    ],
    [
      {
        title: "Equals",
        value: "EQUALS",
      },
      {
        title: "Not Equals",
        value: "NOT_EQUALS",
      },
    ],
  ],
  number: [
    [
      {
        title: "Greater than",
        value: "GREATER_THAN",
      },
      {
        title: "Less than",
        value: "LESS_THAN",
      },
      {
        title: "Greater than or equal",
        value: "GREATER_THAN_OR_EQUAL",
      },
      {
        title: "Less than or equal",
        value: "LESS_THAN_OR_EQUAL",
      },
    ],
  ],
  date: [
    [
      {
        title: "Date Range",
        value: "DATE_RANGE",
      },
    ],
    [
      {
        title: "Before",
        value: "BEFORE",
      },
      {
        title: "After",
        value: "AFTER",
      },
      {
        title: "On",
        value: "ON",
      },
    ],
  ],
};
interface ContextMenuType {
  title: string;
  value:
    | "ON"
    | "EQUALS"
    | "NOT_EQUALS"
    | "CONTAINS"
    | "NOT_CONTAINS"
    | "STARTS_WITH"
    | "ENDS_WITH"
    | "GREATER_THAN"
    | "LESS_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | "LESS_THAN_OR_EQUAL"
    | "DATE_RANGE"
    | "BEFORE"
    | "AFTER";
}
