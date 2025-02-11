def create_groups():
    leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]
    groups = {leader: [] for leader in leaders}
    
    for leader in leaders:
        print(f"\nassisgn members for {leader}:")
        while True:
            name = input("add to group:")
            if name.lower() == 'done':
                break
            groups[leader].append(name)
    
    print("\ngroup members:")
    for leader, members in groups.items():
        print(f"{leader}:")
        for i, member in enumerate(members, 1):
            print(f"  {i}. {member}")
        print()

if __name__ == "__main__":
    create_groups()
