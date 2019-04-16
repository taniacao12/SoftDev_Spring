# Team Matcha (Tania Cao, Joyce Liao, Puneet Johal)

def union (A, B):
    '''All elements in sets A and B.'''
    test = [a for a in A if a not in B]
    return set(test+list(B))
print(union({1,2,3}, {2, 3, 4})) # {1,2,3,4}

def intersection (A, B):
    '''Elements in both set A and set B.'''
    test = [a for a in A if a in B]
    return set(test)
print(intersection({1,2,3}, {2, 3, 4})) # {2,3}

def set_diff(U, A):
    '''Elements in set U that are not also in set A'''
    return set([x for x in U if x not in A])
print(set_diff({1,2,3},{2,3,4})) # {1}
print(set_diff({2,3,4},{1,2,3})) # {4}

def sym_diff(A, B):
    '''Elements in exactly one of set A or B'''
    retList = set_diff(union(A,B), intersection(A,B))
    return retList
print(sym_diff({1,2,3},{2,3,4})) # {1,4}

def cartesian_product(A,B):
    '''Set of all possible ordered pairs where a in a member of A and b is a member of B'''
    return [(a,b) for a in A for b in B]
print(cartesian_product({1,2},{'red','white'})) # {(1, 'white'), (1, 'red'), (2, 'white'), (2, 'red')}

def mutually_exclusive(A,B):
    '''True if sets A and B have no elements in common.'''
    return len(intersection(A,B)) == 0
print(mutually_exclusive({1,2,3},{4,5,6})) # True
