package tik.test.cubespark.model;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.annotations.SerializedName;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ModelSku {
	@SerializedName("_compatible_variation")
	public String compatibleVariation;
	public String sellableStock;
	@SerializedName("SellerSku")
	public String sellerSku;
	@SerializedName("ShopSku")
	public String shopSku;
	public int occupiedStock;
	public int dropshippingStock;
	@SerializedName("Url")
	public String url;
	@SerializedName("color_family")
	public String corlorFamily;
	@SerializedName("package_height")
	public String packageHeight;
	public int price;
	@SerializedName("package_length")
	public String packageLength;
	@SerializedName("special_from_date")
	public String spacialFromDate;
	@SerializedName("Available")
	public int available;
	public int preorderStock;
	@SerializedName("special_to_date")
	public String specialToDate;
	@SerializedName("Status")
	public String status;
	public int quantity;
	@SerializedName("ReservedStock")
	public int reservedStock;
	@SerializedName("Images")
	public List<String> images = new ArrayList<String>();
	@SerializedName("special_time_format")
	public String specialTimeFormat;
	public int fulfilmentStock;
	public List<WarehouseInventories> multiWarehouseInventories = new ArrayList<WarehouseInventories>();
	public String packageWidth;
	public String specialToTime;
	public String specialFromTime;
	public String size;
	@SerializedName("special_price")
	public long specialPrice;
	public int nonsellableStock;
	public int fulfillmentStock;
	@SerializedName("package_weight")
	public String packageWeight;
	@SerializedName("SkuId")
	public long skuId;
	@SerializedName("AllocatedStock")
	public int allocatedStock;
	public int withholdingStock;
}

@Setter
@Getter
@ToString
class WarehouseInventories{
	public int quantity;
	public String warehouseCode;
	public WarehouseInventories(int quantity, String warehouseCode) {
		super();
		this.quantity = quantity;
		this.warehouseCode = warehouseCode;
	}
	public WarehouseInventories() {
		super();
	}
}
