# Server-side

The incoming string is being split using a Space divider into the *words* array (line 19).  

Then a new array *lengths* is being filled with the lengths of each word in *words*, and sorted in the natural order (lines 21-25).  

A new array *resultArr* with size=10 is filled in with zeroes (lines 27-28).  

After making sure there is at least one value in the array, next *for* loop goes through every index in *lengths* and compares the values of the word length with a previously saved value, and update the counter if the value does not change. In case of a new value the counted number is saved in the corresponding to the word length index in resultArr. Index is decreased by 1 because we do not have words with length = 0 and we want to use index 0 for a word of length 1 (lines 30-46).  

The last *for* loop (lines 49-51) build a string for sending to the Client, which is sent to the client in line 54   

The web server is deployed on ...

# Client-side

The incoming responce data is being split into array. Then to print the valid word length of the words, the indexes have to be manipulated with. For this purpose i created a new array of objects with properties *length* and *frequency* (parsing the string to int), then printed the array as table using *console.table()*.
![The printout of a request string and a response](/result.png)

