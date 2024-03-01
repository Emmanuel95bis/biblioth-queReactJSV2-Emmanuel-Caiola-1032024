import "./style.css";

import React from "react";
import PropTypes from "prop-types";
import { Requirements } from "../components/Requirements";

const employees = [
  {
    FirstName: "Tony",
    LastName: "Stark",
    StartDate: "12/08/1993",
    Department: "Sales",
    DateOfBirth: "15/02/1978",
    Street: "13 rue de Paris",
    City: "Paris",
    State: "AL",
    ZipCode: "75005",
  },
  {
    FirstName: "Steve",
    LastName: "Job",
    StartDate: "10/04/1997",
    Department: "Marketing",
    DateOfBirth: "11/09/1967",
    Street: "13 rue victor Hugo",
    City: "Lyon",
    State: "AS",
    ZipCode: "005",
  },
];
const entete = [
  "FirstName",
  "LastName",
  "StartDate",
  "Department",
  "DateOfBirth",
  "Street",
  "City",
  "State",
  "ZipCode",
];

console.log(employees);
console.log(entete);

// Metadata for the story
const meta = {
  title: "App Test",
  component: Requirements,
};

// Template for the story
export const Template = () => (
  <Requirements header={entete} users={employees} />
);

// Prop types for the Template component
Template.propTypes = {
  // Define any prop types needed for your component
};

// Default story export with metadata and template
export default meta;
export const App = Template;

// Optionally, you can also include additional stories or parameters
export const AnotherStory = () => (
  <Requirements header={entete} users={employees} />
);
AnotherStory.storyName = "Another Story";
