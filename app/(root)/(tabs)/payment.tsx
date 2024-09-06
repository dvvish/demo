import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Payment: React.FC = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleConfirmPress = () => {
    // Handle the confirmation action here
    alert("Payment confirmed!");
    // You can navigate to a confirmation screen or another part of the app
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9312/9312240.png' }} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Payment Options</Text>

      <View style={styles.optionContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5359/5359689.png' }} style={styles.optionImage} />
        <Text style={styles.optionText}>Cash on Delivery (COD)</Text>
      </View>

      <View style={styles.optionContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/311/311147.png' }} style={styles.optionImage} />
        <Text style={styles.optionText}>Credit/Debit Card</Text>
      </View>

      <View style={styles.optionContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/11494/11494910.png' }} style={styles.optionImage} />
        <Text style={styles.optionText}>Net Banking</Text>
      </View>

      <View style={styles.optionContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/174/174861.png' }} style={styles.optionImage} />
        <Text style={styles.optionText}>PayPal</Text>
      </View>

      <View style={styles.optionContainer}>
        <Image source={{ uri: 'data:image/jpeg;base64,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4ha0+r8TqDRkUsUbqipmYXPLQXhsjnVVQAeAIBB6URZ/jDbXxNt0iybdu/E3PdmLHoVd6Y0LE7SDKanoqeeGmgdI6AlscQkqX5PzBBdaI9q5un6eI1babxOEtZA2mjjxNFNBU1OKU4nWyNmixAzPSgth8oG8gdJAXrHAi4II5+CrOq0Q59XDSmnZpAUNFHG8SvDWGSU+ecQNzhj6sS+et+n44YxR07oqUUrGTPjZezpWuEjaVhaLW3uccvyjibNC0SsI6hjgS1zXAbyCCB02UUr3iurmUrnHxdtM2pewEjbmRxEbXEZljQ0kjcSRda2uOh6elop3UsMcM07W0jdmMOLbPawXAyvne5CKmrJ2nIOaeggr6KL6oaEZAXO8Rp6N2FrA6N7XveOOIhotmB03UoUBERAREQEREEan1JpXOkN6hrJXl8kLZntp3uPnF0YPHiNxXUi0RE2o8YAIeIhA0fkawOxWa3hnbsC6KIOZXaChkdI8tLXywmB72mzyw8L844FeUmgoY5Y5WhwMUAp2C/JbGCDkOc2GfsXURByqvQMUkssrjJilg8XJDrWju4nB6JJcc+haMGqETYXwbWrdHJEYMDpiWtYQBZgtyTYWvzKRogj9DqjBG9j3OqJzFbZiaV0jGECwc1h5IIG42uOC6WmNGMqYTDLiwOLSQDYnC4OAJ5iQLhbyIOfVaKjkmimficYcRY2/9MOcLY8PFwFwDwuUfoqM1IqeUJBEYcjyS0uDsxxIO4+0roIg4rNWoBSspP6myY9r7YuU8tftLPP5gXZkcVuHRUW3dUYBtXxiIv44AXENHNm493Mt5EEYGpMA2WCSrjMUIgYWSlpwA3sSBmb/ACC6tLoaNk/jAMjpNiyC7nYuQwlw/USSSeOS6SINNmjImzuqA0CV7BG543ua0ktB6L71oDVin8TNGQ8xElx5REmIv2mPGLHFjzuu2iDlaH0DFTFz2mR8j7B0sj3SSuDfNbiduaLnIZZlfLSGrcMzqhz9pephbA8h1rRtxHCzLk3xOufau0iDSrNFRS05p5GB0TmYC0+iBYW5iMs/YsJdExumhlOLFAHCMX5AxgNJI4mwt1ldBEHAqdVY31D6gS1cb5MGMRyljTgFmiwG4C/aVlVarU8jahrg8+MyNme7Fyw9gaGGM/lw4G26+dd1EHOotEsifNI0vxzlrnuJubtYGNw5ZAAXtzkrGi0HDFTGmaDgcHhxJu95kvjc53FxJJuumiCPTao07mQAGdjqdgijlZI5kwYABhc8ecMhkUqNUIHQtixVIwy7fHtXGZ0gFg50jrk2G4cLDmUhRBp6KoBAzAHzSZk4pXl78+GI8PYtxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z' }} style={styles.optionImage} />
        <Text style={styles.optionText}>UPI</Text>
      </View>

      <View style={styles.orderSummary}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.itemText}>Item 1:</Text>
          <Text style={styles.itemText}>₹5000</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.itemText}>Item 2:</Text>
          <Text style={styles.itemText}>₹3000</Text>
        </View>
        <View style={styles.summaryTotal}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalText}>₹8000</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: "#D3D3D3",
    elevation: 3,
    marginBottom: 16,
  },
  optionImage: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  orderSummary: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: "#D3D3D3",
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  summaryTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    marginTop: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  confirmButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Payment;
