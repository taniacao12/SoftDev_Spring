def repeat(w):
    def time(t):
        return w*t
    return time

r1 = repeat("hello")
r2 = repeat("goodbye")
print(r1(2))
print(r2(2))
print(repeat('cool')(3))

def make_counter():
    x = 0
    def inner(ret = False):
        if not ret:
            nonlocal x
            x = x + 1
            return x
        else:
            return x
    return inner
    print(x)
    return x

ctr1 = make_counter()
print(ctr1())
print(ctr1())

ctr2 = make_counter()
print(ctr2())
print(ctr1(True))
print(ctr2())
