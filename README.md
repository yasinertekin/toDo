<h1 align="center">Firebase ile React Native Todo Uygulaması</h1>

# Özet
Bu uygulama, kullanıcıların günlük işlerini takip etmelerine yardımcı olan bir todo uygulamasıdır. Kullanıcılar, uygulama içindeki bir liste üzerinde todo ekleyebilir, silinebilir ve tamamlandığında üstü çizilir. Bu uygulama Firebase kullanarak, 
verilerinizi saklamak ve senkronize etmek için kullanılan bir gerçek zamanlı veritabanı sunucusuna bağlanır.

# Kurulum
Bu uygulamayı kullanmak için, öncelikle bilgisayarınızda Node.js ve React Native CLI kurulu olması gerekir. Daha sonra, bu projeyi klonlayın ve aşağıdaki adımları izleyin:

Firebase Console'da yeni bir proje oluşturun
Yeni bir Firebase projesi oluşturduktan sonra, Firebase Console'da proje ayarlarına gidin ve bir iOS uygulaması için bir Firebase yapılandırması ekleyin.
Yapılandırma dosyasını (GoogleService-Info.plist) indirin ve proje klasörüne yerleştirin.
Terminalde proje klasörüne gidin: cd react-native-todo-app
Gerekli paketleri yükleyin: npm install
Uygulamayı başlatın: npm start

# Ekran Görüntüleri
![github](/assets/screen.jpg)


# Kullanım
Uygulama açıldığında, kullanıcılar bir todo ekleyebilir veya mevcut bir todo'ya tıklayarak onu tamamlayabilir. Tamamlanan bir todo, gri bir arka plana sahip olur ve üstü çizilir.

Todo'yu silmek için, todo'ya uzun basın. Ayrıca, sayfanın üst kısmındaki aktif todo sayısı da görüntülenir.

Tüm todo'lar Firebase veritabanında saklanır ve senkronize edilir. Uygulama veri değişiklikleri olduğunda gerçek zamanlı olarak güncellenir.

# Katkıda Bulunma
Bu uygulama, herhangi bir katkıda bulunmaya açıktır. Herhangi bir değişiklik yapmadan önce, lütfen önce bir "issue" açarak önerinizi tartışın.
