

export async function searchLocation(page) {
  
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Location', exact: true }).click();
  await page.locator('#Location').selectOption('8');
  await page.getByRole('link', { name: 'Name: Armothy Species: unknown Last Location: Post-Apocalyptic Earth Dead Male' }).click();
  await page.getByText('Armothy').click();
  await page.getByRole('cell', { name: 'Post-Apocalyptic Earth' }).first().click();
}
export default searchLocation;
