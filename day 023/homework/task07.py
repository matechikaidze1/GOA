def find_longest_and_shortest(strings):
    if not strings:
        return None, None
    longest = max(strings, key=len)
    shortest = min(strings, key=len)
    return longest, shortest

longest, shortest = find_longest_and_shortest(["apple", "banana", "kiwi", "strawberry"])
print("Longest string:", longest)
print("Shortest string:", shortest)
