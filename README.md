// .toLowerCase(): This method converts the string obtained from restaurant.data.name to lowercase. It ensures case-insensitive comparison, meaning that the search will match regardless of the case of the characters in the restaurant name.

// .includes(searchValue.toLowerCase()): This method checks if the lowercase version of searchValue is included in the lowercase version of the restaurant name obtained from restaurant.data.name. It returns true if searchValue is found within the restaurant name and false otherwise.

When searchValue is empty (because in each restaurants name you can find the empty string ), the filtering logic allows all restaurants to pass through. As a result, the restaurants state is updated with the entire list of restaurants, causing the Body component to re-render and effectively display all restaurants on the DOM. This behavior ensures that all restaurants are rendered even when no search value is provided.