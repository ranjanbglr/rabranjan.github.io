var dates = [
"2010-12-01",
"2010-09-13",
"2010-03-30",
"2010-03-08",
"2015-01-02",
"1989-12-30",
"1989-12-31"];
 
// Now we will define our date comparison functions. These are callbacks
// that we will be providing to the array sort method below.
var date_sort_asc = function (date1, date2) {
  // This is a comparison function that will result in dates being sorted in
  // ASCENDING order. As you can see, JavaScript's native comparison operators
  // can be used to compare dates. This was news to me.
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};
 
var date_sort_desc = function (date1, date2) {
  // This is a comparison function that will result in dates being sorted in
  // DESCENDING order.
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
};
 
// Finally, we are now able to call the sort method on our array of dates.
// More info about array sorting: http://w3schools.com/jsref/jsref_sort.asp
 
// First let's sort the array in ascending order.
dates.sort(date_sort_desc);
 
// Now let's output the results to the page to show that the dates are now
// sorted in ascending order.
document.write('<p>Dates sorted in ascending order (oldest to newest):</p>');
for (var i = 0; i < dates.length; i++) {
  document.write(i + ': ' + dates[i] + '<br>');
}