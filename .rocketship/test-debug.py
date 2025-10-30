#!/usr/bin/env python3
"""Quick debug script to test page selectors"""
from playwright.sync_api import sync_playwright

def test_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto("http://localhost:3000")
        page.wait_for_load啧啧state("networkidle")
        
        print("URL:", page.url)
        print("Title:", page.title())
        
        # Test heading
        try:
            heading = page.get_by_role("heading", name="Welcome back, Rohan", level=1)
            print(f"Heading found: {heading.is_visible()}")
        except Exception as e:
            print(f"Heading error: {e}")
        
        # Test text content
        try:
            active_projects = page.get_by_text("Active Projects", exact=True)
            print(f"Active Projects found: {active_projects.count()}")
        except Exception as e:
            print(f"Active Projects error: {e}")
        
        # Test links
        try:
            overview_link = page.get_by_role("link", name="Overview")
            print(f"Overview link found: {overview_link.count()}")
            print(f"Overview link visible: {overview_link.first.is_visible()}")
        except Exception as e:
            print(f"Overview link error: {e}")
        
        input("Press Enter to close...")
        browser.close()

if __name__ == "__main__":
    test_homepage()


