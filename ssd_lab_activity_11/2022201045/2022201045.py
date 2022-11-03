import csv
 
# opening the CSV file
with open('lab_11_data.csv', mode ='r')as file:
   
  # reading the CSV file
  csvFile = csv.reader(file)
 
  stock_data = []
  i = 0
  # displaying the contents of the CSV file
  for lines in csvFile:
        #print(lines)
        if( i == 0 ):
            column_names = lines[:-6]
        else:
            stock_data.append(lines[:-6])
        i = 1

print(stock_data)
print(column_names)


result = list(filter(lambda x: (float(x[-1]) >= -3), stock_data)) 
print()
print(result)


open_price = list(map(lambda x:   float(  x[1].replace(",", "")   ) , result))
high_price = list(map(lambda x:   float(  x[2].replace(",", "")   ) , result))
low_price = list(map(lambda x:   float(  x[3].replace(",", "")   ) , result))
open_avg = sum(open_price)/len(open_price)
low_avg = sum(low_price)/len(low_price)
high_avg = sum(high_price)/len(high_price)
print(open_avg)
print(high_avg)
print(low_avg)
with open('avg_output.txt', 'w') as f:
    # create the csv writer
    writer = csv.writer(f)

    # write a row to the csv file
    writer.writerow([open_avg])
    writer.writerow([high_avg])
    writer.writerow([low_avg])
    
    
def starts_with(stock_data, ch):
    result2 = list(filter(lambda x: x[0][0] == ch , stock_data))
    return result2

print("Give the starting character:")
ch = input()
result2 = starts_with(result, ch )


with open('stock_output.txt', 'w') as f:
    # create the csv writer
    writer = csv.writer(f, delimiter =' ')

    # write a row to the csv file
    for i in range(len(result2)):
        writer.writerow(result2[i])
print(result2)
