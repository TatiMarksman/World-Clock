# World Clock

Dünya saatlerini görüntüleyebileceğiniz basit ve kullanışlı bir React uygulaması.

## Özellikler

- Farklı şehirler için gerçek zamanlı saat gösterimi
- Yeni şehir ekleme
- Şehir silme
- Responsive tasarım
- Modern ve hızlı arayüz

## Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/TatiMarksman/World-Clock.git

# Proje dizinine gidin
cd World-Clock

# Bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npm start
```

Uygulama http://localhost:3000 adresinde açılacaktır.

## Kullanım

1. **Şehir Ekleme**: Form alanlarına şehir adı ve saat dilimi (UTC offset) girin
2. **Örnek Saat Dilimleri**:
   - İstanbul: `3` (UTC+3)
   - New York: `-5` (UTC-5)
   - Tokyo: `9` (UTC+9)
   - Londra: `0` (UTC+0)
3. **Şehir Silme**: Saatin yanındaki ✕ butonuna tıklayın

## Teknolojiler

- React - Kullanıcı arayüzü
- Tailwind CSS - Styling
- JavaScript ES6+ - Modern JavaScript özellikleri

## Proje Yapısı

```
src/
├── components/
│   ├── Watch.jsx      # Tek şehir saati bileşeni
│   ├── WatchForm.jsx  # Yeni şehir ekleme formu
│   └── WatchList.jsx  # Saatleri listeleme bileşeni
├── App.js             # Ana uygulama bileşeni
└── index.js           # Uygulama giriş noktası
```

## Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
