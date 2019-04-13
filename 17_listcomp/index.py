# Team Kyoto (Tania Cao and Rubin Peci)

# ['00', '22', '44', '66', '88'] the loopy way
oneA = []
for x in range(5):
    oneA.append(str(x*22).zfill(2))
print(oneA)

# ['00', '22', '44', '66', '88'] the listcompy way
oneB = [str(x*22).zfill(2) for x in range(5)]
print(oneB)

# [7, 17, 27, 37, 47] the loopy way
twoA = []
for x in range(5):
    twoA.append(x*10 + 7)
print(twoA)

# [7, 17, 27, 37, 47] the listcompy way
twoB = [x*10+7 for x in range(5)]
print(twoB)

# [0, 0, 0, 0, 1, 2, 0, 2, 4] the loopy way
threeA = []
for x in range(9):
    if x > 5:
        threeA.append(x%3*2)
    elif x > 2:
        threeA.append(x%3)
    else:
        threeA.append(0)
print(threeA)

# [0, 0, 0, 0, 1, 2, 0, 2, 4] the listcompy way
twoB = [x%3*2 if x>5 else x%3 if x>2 else 0 for x in range(9)]
print(twoB)

# helper function
def is_prime (num):
    if num > 1:
        for i in range(2,num):
            if (num % i == 0):
                return False
        return True
    else:
        return True
        
# composites on range [0,100] in accending order the loopy way
def composite_rangeA (start, end):
    fourA = []
    for x in range(start, end):
        if (not is_prime(x)):
            fourA.append(x)
    return fourA
print(composite_rangeA(0,100))

# composites on range [0,100] in accending order the listcompy way
def composite_rangeB (start, end):
    fourB = [x for x in range(start, end) if not is_prime(x)]
    return fourB
print(composite_rangeB(0,100))

# primes on range [0,100] in accending order the loopy way
def prime_rangeA (start, end):
    fiveA = []
    for x in range(start, end):
        if (is_prime(x) and x > 1):
            fiveA.append(x)
    return fiveA
print(prime_rangeA(0,100))

# primes on range [0,100] in accending order the listcompy way
def prime_rangeB (start, end):
    fiveB = [x for x in range(start, end) if is_prime(x) and x > 1]
    return fiveB
print(prime_rangeB(0,100))


# divisors of a number listed in ascending order the loopy way
def divisorsA (num):
    sixA = []
    for x in range(1, num+1):
        if (num % x == 0):
            sixA.append(x)
    return sixA
print(divisorsA(10))

# divisors of a number listed in ascending order the listcompy way
def divisorsB (num):
    sixB = [x for x in range(1,num+1) if num % x == 0]
    return sixB
print(divisorsB(10))

# transpose a matrix the loopy way
def transposeA (matrix):
    sevenA = []
    for i in range(0,matrix[0].length()):
        sevenA.append(matrix[0]
