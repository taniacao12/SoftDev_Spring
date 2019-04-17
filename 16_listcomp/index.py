alphabet = "abcdefghijklmnopqrstuvwxyz"
ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
nums = "1234567890"
syms = ".?!&#,;:-_*"

# check if password meets a minimum threshold
def pass_check (pswd):
    alph = [x for x in pswd if x in alphabet]
    ALPH = [x for x in pswd if x in ALPHABET]
    num = [x for x in pswd if x in nums]
    if len(alph) * len(ALPH) * len(num) == 0:
        return False
    return True

# rate password on scale of 1 to 8
def pass_rate (pswd):
    score = 0
    if (pass_check(pswd)):
        score = 6
    else:
        alph = [x for x in pswd if x in alphabet]
        if len(alph) > 0:
            score += 2
        ALPH = [x for x in pswd if x in ALPHABET]
        if len(ALPH) > 0:
            score += 2
        num = [x for x in pswd if x in nums]
        if len(num) > 0:
            score += 2
    sym = [x for x in pswd if x in syms]
    if len(sym) > 0:
        score += 2
    return score
        
print(pass_check("Ab3"))
print(pass_check("qqq"))
print(pass_check(""))
print(pass_check("%$#@"))

print(pass_rate("TaniaCao!"))
print(pass_rate("TaniaCao12!"))
print(pass_rate("taniacao"))
print(pass_rate(""))
