using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace DataTest.ModelsTest
{
    public class BaseTest
    {
        [Fact]
        public void BaseInstanceTest()
        {
            //Arrange
            //Act
            Action a = () => Activator.CreateInstance<Base>();
            //Assert
            Assert.Throws<MissingMethodException>(a);
        }
    }
}
