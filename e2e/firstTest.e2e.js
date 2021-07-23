describe('CatalogueApp', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have catalogue-list', async () => {
    await expect(element(by.id('catalogueList'))).toBeVisible();
  });

  it('should show product-detail screen after tap', async () => {
    await element(by.id('item-1')).tap();
    await expect(element(by.id('detail-page'))).toBeVisible();
  });

  it('Detail page back-btn should work', async () => {
    await element(by.id('item-2')).tap();
    await expect(element(by.id('detail-page'))).toBeVisible();
    await element(by.id('header-back-btn')).tap();
    await expect(element(by.id('catalogueList'))).toBeVisible();
  });


});
