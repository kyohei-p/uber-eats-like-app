class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :total_price, null: false, default: 0

      t.timestamps
    end
  end
end
