text = open("metamorphosis.txt", "r").read().split()

def search (word):
    return len([word for w in text if (w == word)])
print(search("a"))
print(search("the"))
