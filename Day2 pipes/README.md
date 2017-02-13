# Day2 filters (In angular 2 known as pipes)

### date filter
Formats date to a string based on the requested format.

Syntax for html template binding:
```
{{ date_expression | date :format: timezone }}
```
Syntax for javascript use:
```
$filter('date')(date, format, timezone)
```
Parameter details:
 date      - (date/number/string) 
 format    - (string)Optional
 timezone  - (string)Optional


### filter filter
Syntax for  html template
```

    {{ filter_expression | filter : expression_ : comarator : anyPropertyKey }}

````
synatax for javascript 
```

    $filter('filter_name')( array, expression, comparator, anyPropertyKey)

```
