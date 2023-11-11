export async function searchEpisode(page) {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Episode' }).click();
  await page.locator('#Episode').selectOption('8');
  await page.getByText('Rixty Minutes', { exact: true }).click();
  await page.getByRole('heading', { name: 'Air Date: March 17, 2014' }).click();
  await page.getByRole('link', { name: 'Name: Jerry Smith Species: Human Last Location: Earth (Replacement Dimension) Alive Male' }).click();
  await page.getByText('Jerry Smith').click();
  await page.getByRole('cell', { name: 'Earth (Replacement Dimension)' }).nth(1).click();
  await page.getByRole('cell', { name: '39' }).click();
}
export default searchEpisode;
