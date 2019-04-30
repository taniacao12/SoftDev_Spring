from functools import reduce

text = open("metamorphosis.txt", "r").read().split()

def search (word):
    return len([word for w in text if (w == word)])
print(search("a"))
print(search("the"))

def multiSearch (words):
    return sum([search(w) for w in words])
print(multiSearch(["a", "the"]))

def mostFreq (text):
    uniqueWords = list(set(text))
    freq = [(word, search(word)) for word in uniqueWords]
    return reduce((lambda a, b: a if a[1] > b[1] else b), freq)
print(mostFreq(text))
