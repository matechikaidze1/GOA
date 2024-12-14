import pygame
import sys

pygame.init()

# display
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Cookie Clicker!")

font = pygame.font.SysFont(None, 30)

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# game variables
cookies = 0
gold = 0
cookies_per_click = 1
gold_per_click = 0

# gadget prices
bigger_finger_price = 50
better_mines_price = 100
double_cookies_price = 200

# price doubling
def double_price(price):
    return price * 2

def display_text(text, x, y):
    rendered_text = font.render(text, True, BLACK)
    screen.blit(rendered_text, (x, y))

running = True
while running:
    screen.fill(WHITE)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.MOUSEBUTTONDOWN:
            if event.button == 1:  # M1 (left mouse button)
                cookies += cookies_per_click
                gold += gold_per_click

    # cookie button
    pygame.draw.rect(screen, (255, 223, 0), (350, 250, 100, 100))
    pygame.draw.rect(screen, BLACK, (350, 250, 100, 100), 5)
    display_text("click the cookie", 360, 270)

    # current cookies and gold
    display_text(f"cookies: {cookies}", 10, 10)
    display_text(f"gold: {gold}", 10, 40)

    # current gadgets
    display_text(f"bigger finger: {bigger_finger_price} gold", 10, 100)
    display_text(f"better mines: {better_mines_price} gold", 10, 130)
    display_text(f"double cookies: {double_cookies_price} gold", 10, 160)


    mouse_x, mouse_y = pygame.mouse.get_pos()
    if pygame.mouse.get_pressed()[0]:
        # bigger finger gadget
        if 10 <= mouse_x <= 250 and 100 <= mouse_y <= 120 and gold >= bigger_finger_price:
            cookies_per_click += 1
            gold -= bigger_finger_price
            bigger_finger_price = double_price(bigger_finger_price)

        # better mines gadget
        if 10 <= mouse_x <= 250 and 130 <= mouse_y <= 150 and gold >= better_mines_price:
            gold_per_click += 1
            gold -= better_mines_price
            better_mines_price = double_price(better_mines_price)

        # double cookies gadget
        if 10 <= mouse_x <= 250 and 160 <= mouse_y <= 180 and gold >= double_cookies_price:
            cookies_per_click *= 2
            gold -= double_cookies_price
            double_cookies_price = double_price(double_cookies_price)

    pygame.display.update()

# leave the game
pygame.quit()
sys.exit()
