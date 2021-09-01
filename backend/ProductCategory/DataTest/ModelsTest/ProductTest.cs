using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Data.Models;
using Xunit;

namespace DataTest.ModelsTest
{
    public class ProductTest
    {
        [Fact]
        public void TestProductInstace()
        {
            //Arrange
            Product c;
            //Act
            c = Activator.CreateInstance<Product>();
            //Assert
            Assert.IsType<Product>(c);
        }
        [Fact]
        public void TestProductInheritance()
        {
            //Arrange
            Product c;
            //Act
            c = Activator.CreateInstance<Product>();
            //Assert
            Assert.IsAssignableFrom<Base>(c);
        }
        [Fact]
        public void TestProductIdExistence()
        {
            //Arrange
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Id");
            //Assert
            Assert.NotNull(p);
        }
        [Fact]
        public void TestProductIdType()
        {
            //Arrange
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Id");
            Type sT = typeof(int);
            Type typeProperty = p != null ? p.PropertyType : null;
            //Assert
            Assert.Equal(sT, typeProperty);
        }
        [Fact]
        public void TestProductIdGetSet()
        {
            //Arrange
            Product cO = new Product();
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Id");
            object valueProp = null;
            if (p != null && p.PropertyType == typeof(int))
            {
                p.SetValue(cO, 0);
                valueProp = p.GetValue(cO);
            }
            //Assert
            Assert.NotNull(valueProp);
        }
        [Fact]
        public void TestProductNameExistence()
        {
            //Arrange
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Name");
            //Assert
            Assert.NotNull(p);
        }
        [Fact]
        public void TestProductNameType()
        {
            //Arrange
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Name");
            Type sT = typeof(string);
            Type typeProperty = p != null ? p.PropertyType : null;
            //Assert
            Assert.Equal(sT, typeProperty);
        }
        [Fact]
        public void TestProductNameGetSet()
        {
            //Arrange
            Product cO = new Product();
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Name");
            object valueProp = null;
            if (p != null && p.PropertyType == typeof(string))
            {
                p.SetValue(cO, "");
                valueProp = p.GetValue(cO);
            }
            //Assert
            Assert.NotNull(valueProp);
        }
        [Fact]
        public void TestProductValueExistence()
        {
            //Arrange
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Value");
            //Assert
            Assert.NotNull(p);
        }
        [Fact]
        public void TestProductValueType()
        {
            //Arrange
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Value");
            Type sT = typeof(decimal);
            Type typeProperty = p != null ? p.PropertyType : null;
            //Assert
            Assert.Equal(sT, typeProperty);
        }
        [Fact]
        public void TestProductValueGetSet()
        {
            //Arrange
            Product cO = new Product();
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Value");
            object valueProp = null;
            if (p != null && p.PropertyType == typeof(decimal))
            {
                p.SetValue(cO, 0M);
                valueProp = p.GetValue(cO);
            }
            //Assert
            Assert.NotNull(valueProp);
        }
        [Fact]
        public void TestProductCategoryExistence()
        {
            //Arrange
            Type cT = typeof(Product);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Category");
            //Assert
            Assert.NotNull(p);
        }
    }
}
