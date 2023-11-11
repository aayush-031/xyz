export async function searchBox(page) {
  
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Status' }).click();
  await page.getByLabel('Dead').check();
  await page.getByRole('button', { name: 'Species' }).click();
  await page.getByLabel('Human', { exact: true }).check();
  await page.getByRole('button', { name: 'Gender' }).click();
  await page.getByLabel('female').check();
  await page.getByRole('link', { name: 'Name: Calypso Species: Human Last Location: unknown Dead Female' }).click();
  await page.getByRole('heading', { name: 'Calypso' }).click();
}
export default searchBox;
