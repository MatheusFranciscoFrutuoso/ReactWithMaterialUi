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
    public class CategoryTest
    {
        [Fact]
        public void TestCategoryInstace()
        {
            //Arrange
            Category c;
            //Act
            c = Activator.CreateInstance<Category>();
            //Assert
            Assert.IsType<Category>(c);
        }
        [Fact]
        public void TestCategoryInheritance()
        {
            //Arrange
            Category c;
            //Act
            c = Activator.CreateInstance<Category>();
            //Assert
            Assert.IsAssignableFrom<Base>(c);
        }
        [Fact]
        public void TestCategoryIdExistence()
        {
            //Arrange
            Type cT = typeof(Category);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Id");
            //Assert
            Assert.NotNull(p);
        }
        [Fact]
        public void TestCategoryIdType()
        {
            //Arrange
            Type cT = typeof(Category);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Id");
            Type sT = typeof(int);
            Type typeProperty = p != null ? p.PropertyType : null;
            //Assert
            Assert.Equal(sT, typeProperty);
        }
        [Fact]
        public void TestCategoryIdGetSet()
        {
            //Arrange
            Category cO = new Category();
            Type cT = typeof(Category);
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
        public void TestCategoryNameExistence()
        {
            //Arrange
            Type cT = typeof(Category);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Name");
            //Assert
            Assert.NotNull(p);
        }
        [Fact]
        public void TestCategoryNameType()
        {
            //Arrange
            Type cT = typeof(Category);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Name");
            Type sT = typeof(string);
            Type typeProperty = p != null ? p.PropertyType : null;
            //Assert
            Assert.Equal(sT, typeProperty);
        }
        [Fact]
        public void TestCategoryNameGetSet()
        {
            //Arrange
            Category cO = new Category();
            Type cT = typeof(Category);
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
        public void TestCategoryDescriptionExistence()
        {
            //Arrange
            Type cT = typeof(Category);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Description");
            //Assert
            Assert.NotNull(p);
        }
        [Fact]
        public void TestCategoryDescriptionType()
        {
            //Arrange
            Type cT = typeof(Category);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Description");
            Type sT = typeof(string);
            Type typeProperty = p != null ? p.PropertyType : null;
            //Assert
            Assert.Equal(sT, typeProperty);
        }
        [Fact]
        public void TestCategoryDescriptionGetSet()
        {
            //Arrange
            Category cO = new Category();
            Type cT = typeof(Category);
            //Act
            PropertyInfo p = cT.GetProperties().FirstOrDefault(c => c.Name == "Description");
            object valueProp = null;
            if (p != null && p.PropertyType == typeof(string))
            {
                p.SetValue(cO, "");
                valueProp = p.GetValue(cO);
            }
            //Assert
            Assert.NotNull(valueProp);
        }

    }
}
