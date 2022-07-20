// Typescript libraries

interface Student {
  ID: number;
  firstName: string;
  lastName: string;
}

// Sample using JQuery
import $ from 'jquery';

$.fn.extend({
  callSampleFunction() {
    console.log('Sample function activated.');
  },
});

$('input').callSampleFunction();

export const sampleValue = 10.0;
